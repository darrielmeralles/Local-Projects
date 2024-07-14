let url = "./php/actions.php";
let settings = {
    url,
    method: "POST",
    data: {}
}

$(window).on('load', function() {
    $('#login-form').modal('show');
});

$('.signIn-wrapper').on('click', '.loginButton', function() {
    let username = $('.signIn-wrapper').find('#username').val();
    let password = $('.signIn-wrapper').find('#password').val();
    let siteAlias = $('.signIn-wrapper').find('#siteAlias').val();
    let encryptedAccess = window.btoa(`${username}:${password}`);

    login(username, password).then(resp => {
        const jsonString = resp.substring(resp.indexOf('{'));
        let data = JSON.parse(jsonString);

        if(data.status) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Sign In Successfully!",
                showConfirmButton: false,
                timer: 1500
            });

            setLocalStorage('token', encryptedAccess);

            setTimeout(() => {
                window.location.href = `/CamelDev/tcmlgit/api-torylora/project/publishredirect.html?siteAlias=${siteAlias}`;
                // window.location.href = `/Dev-Projects/Duda-URL-Redirect-Dashboard-Main/dashboard.html?siteAlias=${siteAlias}`;
            }, 1500);
        }else {
            Swal.fire({
                title: "Error!",
                text: `${data.response}`,
                icon: "error"
            });
        }
    });
});

function login(username, password) {
    let loginSettings = JSON.parse(JSON.stringify(settings));
	Object.assign(loginSettings.data, { action: "Login", username, password });

    return doAjax(loginSettings);
}

function setLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true; // Data successfully stored
    } catch (error) {
        console.error(`Error setting data in localStorage for key "${key}":`, error);
        return false; // Error occurred while storing data
    }
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