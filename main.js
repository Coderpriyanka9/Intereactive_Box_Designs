// document.addEventListener("DOMContentLoaded", function () {
//     const radioButtons = document.querySelectorAll("input[name='shoes']");
//     const boxes = document.querySelectorAll(".box1, .box2, .box3");
    
//     function hideAllDropdowns() {
//         document.querySelectorAll(".tbl, .tbl2").forEach(tbl => {
//             tbl.style.display = "none";
//         });
//     }
    
//     function resetBoxSize() {
//         boxes.forEach(box => {
//             box.style.height = "74px";
//         });
//     }
    
//     radioButtons.forEach((radio, index) => {
//         radio.addEventListener("change", function () {
//             hideAllDropdowns();
//             resetBoxSize();
            
//             if (this.checked) {
//                 const parentBox = this.closest(".box1, .box2, .box3");
//                 const dropdown = parentBox.querySelector(".tbl, .tbl2");
//                 if (dropdown) {
//                     dropdown.style.display = "block";
//                     parentBox.style.height = "170px";
//                 }
//             }
//         });
//     });
    
//     document.addEventListener("click", function (event) {
//         if (![...radioButtons].some(radio => radio.contains(event.target)) &&
//             ![...boxes].some(box => box.contains(event.target))) {
//             radioButtons.forEach(radio => radio.checked = false);
//             hideAllDropdowns();
//             resetBoxSize();
//         }
//     });
    
//     hideAllDropdowns();
// });

document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll("input[name='shoes']");
    const boxes = document.querySelectorAll(".box1, .box2, .box3");
    
    function hideAllDropdowns() {
        document.querySelectorAll(".tbl, .tbl2").forEach(tbl => {
            tbl.style.display = "none";
        });
    }
    
    function resetBoxStyles() {
        boxes.forEach(box => {
            box.style.height = "74px";
            box.style.border = "2px solid #ccc";
            box.style.backgroundColor = "white";
        });
    }
    
    radioButtons.forEach((radio, index) => {
        radio.addEventListener("change", function () {
            hideAllDropdowns();
            resetBoxStyles();
            
            if (this.checked) {
                const parentBox = this.closest(".box1, .box2, .box3");
                const dropdown = parentBox.querySelector(".tbl, .tbl2");
                if (dropdown) {
                    dropdown.style.display = "block";
                    parentBox.style.height = "170px";
                    parentBox.style.border = "2px solid #FF6B82";
                    parentBox.style.backgroundColor = "#FFECEC";
                }
            }
        });
    });
    
    document.addEventListener("click", function (event) {
        if (![...radioButtons].some(radio => radio.contains(event.target)) &&
            ![...boxes].some(box => box.contains(event.target))) {
            radioButtons.forEach(radio => radio.checked = false);
            hideAllDropdowns();
            resetBoxStyles();
        }
    });
    
    hideAllDropdowns();
});