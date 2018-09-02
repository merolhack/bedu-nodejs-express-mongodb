(function () {
    const form = document.forms.namedItem("form-create");
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let formData = {
            author: {
                name: null
            }
        };
        const data = new FormData(form);
        data.forEach(function(value, key) {
            console.log(value, key);
            if (key === 'tags') {
                formData[key] = value.split(',');
            } else if (key === 'author') {
                formData.author.name = value;
            } else {
                formData[key] = value;
            }
        });
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
        xhr.open("POST", "/api/questions");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(formData));
    }, false);
})();
