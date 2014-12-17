var mystack = stack()

var $ = function(query) {
    return [].slice.call(document.querySelectorAll(query));
};

// Get all code blocks in the presentation and either eval their code,
// or make the code runnable when the code is clicked:
$('pre > code').forEach(function(el) {
    (function(codeTag) {
        if (codeTag.classList.contains('norun')) {
            // Do nothing
        } else if (codeTag.classList.contains('predefine')) {
            var code = codeTag.innerText;
            eval(code);
        } else {
            codeTag.classList.add('clickable');
            codeTag.addEventListener('contextmenu', function(evt) {
                evt.preventDefault();
                var code = codeTag.innerText;
                eval(code);
                codeTag.classList.add('finished');
                setTimeout(function() { codeTag.classList.remove('finished'); }, 7000);
            })
        }
    }(el))
});
