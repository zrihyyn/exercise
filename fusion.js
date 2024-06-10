document.addEventListener('DOMContentLoaded', function() {
    const testElements = document.querySelectorAll('.test0, .test1, .test2, .test3, .test4, .test5, .test6, .test7, .test8');
    
    testElements.forEach(element => {
        element.addEventListener('click', function() {
            const alternateText = this.getAttribute('data-alternate');
            if (alternateText) {
                this.innerHTML = alternateText;
            }
        });
    });
});
