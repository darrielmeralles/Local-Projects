let site_alias = getParameter('siteAlias'); //"a37fc1cd317c4ceb9d5c6e474c85845a";
let url = "./php/actions.php";
let settings = {
    url,
    method: "POST",
    data: {}
}

$(window).on('load', function() {
    if(isAuthenticated()) {
        getUrlList();
        $('.siteAlias').html(site_alias);
        // getSite();//get site pages
    }else {
        window.location.href = `/CamelDev/tcmlgit/api-torylora/project/login.html`;
        // window.location.href = `/Dev-Projects/Duda-URL-Redirect-Dashboard-Main/index.html`;
    }
    
});

$("#addRedirectModal").on("hidden.bs.modal", function () {
    $('.dashboard-wrapper').find('#add-source').val('');
    $('.dashboard-wrapper').find('#add-target').val('');
});

$("#updateRedirectModal").on("hidden.bs.modal", function () {
    $('.dashboard-wrapper').find('#update-id').val('');
    $('.dashboard-wrapper').find('#update-source').val('');
    $('.dashboard-wrapper').find('#update-target').val('');
});

$('.dashboard-wrapper').on('click', '.logoutButton', function() {
    removeLocalStorage('token');

    setTimeout(() => {
        window.location.href = `/CamelDev/tcmlgit/api-torylora/project/login.html`;
        // window.location.href = `/Dev-Projects/Duda-URL-Redirect-Dashboard-Main/index.html`;
    }, 1500);
});

$('.dashboard-wrapper').on('click', '.republishSite', function() {
    Swal.fire({
        title: "Are you sure?",
        text: "This action will republish the site.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, republish site!"
    }).then((result) => {
        if (result.isConfirmed) {
            publishedSite().then(resp => {
                const jsonString = resp.substring(resp.indexOf('{'));
                let data = JSON.parse(jsonString);
                console.log(data);
                if(data.status) {
                    Swal.fire({
                        title: "Republished!",
                        text: "The site has been republished.",
                        icon: "success"
                    });
                }else {
                    Swal.fire({
                        title: "Error!",
                        text: `${data.response}`,
                        icon: "error"
                    });
                }
            });
        }
    });
});

$('.dashboard-wrapper').on('click', '.addRedirect', function() {
    let source = $('.dashboard-wrapper').find('#add-source').val();
    let target = $('.dashboard-wrapper').find('#add-target').val();
    let response_code = $('.dashboard-wrapper').find('#add-responceCode').val();
    let op = $('input[name="flexRadioDefault]:checked').val();
    // let op = $(".form-check").find('input[name="flexRadioDefault]:checked').siblings(".distinationpage").val();
    console.log(op, "op");

    console.log(response_code, "response_code");

    addUrl(source, target, response_code).then(resp => {
        const jsonString = resp.substring(resp.indexOf('{'));
        let data = JSON.parse(jsonString);
        console.log(data);
        if(data.status) {
            getUrlList();
            $('#addRedirectModal').modal('hide');
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "URL redirect added successfully!",
                showConfirmButton: false,
                timer: 1500
            });
        }else {
            $('#addRedirectModal').modal('hide');
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${data.response}`,
                showConfirmButton: false,
                timer: 5000
            });
        }
    });
});

$('.dashboard-wrapper').on('click', '.updateRedirect', function() {
    let urlId = $('.dashboard-wrapper').find('#update-id').val();
    let source = $('.dashboard-wrapper').find('#update-source').val();
    let target = $('.dashboard-wrapper').find('#update-target').val();
    let response_code = $('.dashboard-wrapper').find('#update-responceCode').val();
    console.log(response_code, "response_code update");
    updateUrl(urlId, source, target, response_code).then(resp => {
        const jsonString = resp.substring(resp.indexOf('{'));
        let data = JSON.parse(jsonString);
        console.log(data);
        if(data.status) {
            getUrlList();
            $('#updateRedirectModal').modal('hide');
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "URL redirect updated successfully!",
                showConfirmButton: false,
                timer: 1500
            });
        }else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${data.response}`,
                showConfirmButton: false,
                timer: 5000
            });
        }
    });
});

$('.dashboard-wrapper').on('click', '.btn-update', function() {
    let urlId = $(this).data('id');
    findUrl(urlId);
});

$('.dashboard-wrapper').on('click', '.deleteRedirect', function() {
    let urlId = $(this).data('id');

    Swal.fire({
        title: "Are you sure?",
        text: "This action will remove the URL redirect from the site.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            deleteUrl(urlId).then(resp => {
                const jsonString = resp.substring(resp.indexOf('{'));
                let data = JSON.parse(jsonString);
                console.log(data);
                if(data.status) {
                    getUrlList();
                    Swal.fire({
                        title: "Deleted!",
                        text: "URL Redirect has been deleted.",
                        icon: "success"
                    });
                }else {
                    Swal.fire({
                        title: "Error!",
                        text: `${data.response}`,
                        icon: "error"
                    });
                }
            });
        }
    });
});

function isAuthenticated() {
    let token = getLocalStorage('token');
    return token !== null;
}

function getUrlList() {
    let getUrlSettings = JSON.parse(JSON.stringify(settings));
	Object.assign(getUrlSettings.data, { action: "Get Url", site_alias });

    let urlList = doAjax(getUrlSettings);
    urlList.then(resp => {
		// Extract the JSON part from the received data
		const jsonString = resp.substring(resp.indexOf('{'));
        let data = JSON.parse(jsonString);
		let results = data.response.results;
        
        if(data.status) {
			paginateData(results);
        }else {
            paginateData(null);
            console.error(data.response);
        }
	});
}

function findUrl(urlId) {
    let getUrlSettings = JSON.parse(JSON.stringify(settings));
	Object.assign(getUrlSettings.data, { action: "Get Url", site_alias });

    let urlList = doAjax(getUrlSettings);
    urlList.then(resp => {
        const jsonString = resp.substring(resp.indexOf('{'));
        let data = JSON.parse(jsonString);
        let results = data.response.results;

        let selectedUrl = results.filter(item => {
            return item.id === urlId.toString();
        });

        $('.dashboard-wrapper').find('#update-id').val(urlId);
        $('.dashboard-wrapper').find('#update-source').val(selectedUrl[0].source);
        $('.dashboard-wrapper').find('#update-target').val(selectedUrl[0].target);
        $('.dashboard-wrapper').find('#update-responceCode').val(selectedUrl[0].response_code);
    });
}

function addUrl(source, target, response_code) {
    let addUrlSettings = JSON.parse(JSON.stringify(settings));
	Object.assign(addUrlSettings.data, { action: "Add Url", source, target, response_code, site_alias });

    return doAjax(addUrlSettings);
}

function updateUrl(urlId, source, target, response_code) {
    let updateUrlSettings = JSON.parse(JSON.stringify(settings));
	Object.assign(updateUrlSettings.data, { action: "Update Url", urlId, source, target, site_alias, response_code });

    return doAjax(updateUrlSettings);
}

function deleteUrl(urlId) {
    let deleteUrlSettings = JSON.parse(JSON.stringify(settings));
	Object.assign(deleteUrlSettings.data, { action: "Delete Url", urlId, site_alias });

    return doAjax(deleteUrlSettings);
}

function publishedSite() {
    let publishSiteSettings = JSON.parse(JSON.stringify(settings));
	Object.assign(publishSiteSettings.data, { action: "Published Site", site_alias });

    return doAjax(publishSiteSettings);
}

function paginateData(data) {
    let divPosition = $(".dashboard-wrapper").offset().top;
    let siteHeaderHeight = 0;
	let pageSize = 10;

    $('.dashboard-wrapper').pagination({
        dataSource: data,
        pageSize,
        callback:function(data) {
            addTable(data);
        },
        afterPageOnClick: function() {
            $("html, body").animate({scrollTop: divPosition - siteHeaderHeight});
        },
        afterNextOnClick: function() {
            $("html, body").animate({scrollTop: divPosition - siteHeaderHeight});
        },
        afterPreviousOnClick: function() {
            $("html, body").animate({scrollTop: divPosition - siteHeaderHeight});
        },
    });

	data.length <= 5 ? $('.dashboard-wrapper .paginationjs').fadeOut(0) : $('.dashboard-wrapper .paginationjs').fadeIn(0);
}

function addTable(data) {
    let output = '';

    if(data !== null) {
        data.map(item => {
            let {id, source, target, response_code} = item;
    
            output += `
                <tr>
                    <th scope="row">${id}</th>
                    <td>${source}</td>
                    <td>${target}</td>
                    <td>${response_code}</td>
                    <td>
                        <div class="container-fluid p-0">
                            <button type="button" class="btn btn-warning btn-update" data-id="${id}" data-bs-toggle="modal" data-bs-target="#updateRedirectModal"><i class="fa-solid fa-pen"></i></button>
                            <button type="button" class="btn btn-danger ms-2 deleteRedirect btn-delete" data-id="${id}"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </td>
                </tr>
            `;            
        });

        $('.redirect-table-list').html(output); 
    }else {
        output += `
            <tr>
                <td colspan="4">
                    <div class="noDataFound d-flex justify-content-center align-items-center flex-column p-5">
                        <i class="fa-solid fa-triangle-exclamation fs-1 text-danger"></i>
                        <span class="fs-3 fw-bold mt-2">No data found for this site!</span>
                    </div>
                </td>
            </tr>
        `; 
        
        $('.redirect-table-list').html(output); 
    }
}

function getLocalStorage(key) {
    try {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : null;
    } catch (error) {
        console.error(`Error retrieving data from localStorage for key "${key}":`, error);
        return null; // Error occurred while retrieving data
    }
}

function removeLocalStorage(key) {
    try {
        localStorage.removeItem(key);
        return true; // Data successfully removed
    } catch (error) {
        console.error(`Error removing data from localStorage for key "${key}":`, error);
        return false; // Error occurred while removing data
    }
}

function getParameter(name) {
    let pageURL = window.location.search.substring(1), 
        urlVariables = pageURL.split('&'), 
        parameterName;

    for(const key in urlVariables) {
        parameterName = urlVariables[key].split('='); 
        if (parameterName[0] === name) { 
            return parameterName[1] === undefined ? true : decodeURIComponent(parameterName[1]); 
        } 
    }
    
    return false; 
}

/**
 * @param settings
 * Reusable Async AJAX
 * eg: let a = doAjax({
        url: ajaxurl,
        type: 'POST',
        data: args
    })
    Callback : a.then(data => {
        console.log(data)
    })
*/
function doAjax(settings) {
    settings.data = JSON.stringify(settings.data);
    return new Promise((res, rej) => $.ajax(settings).done(a => res(a)));
}