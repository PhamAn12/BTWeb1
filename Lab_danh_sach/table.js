var chk = document.getElementsByName("check");
for (var i = 0; i < chk.length; i++) {
    chk[i].onchange = function () {
        
        if (this.checked) {
            this.parentNode.parentNode.style.backgroundColor = "yellow";
            var c = document.getElementsByName("check");
            var j = 0;
            for (; j < c.length; j++) {
                if (!c[j].checked) {
                    document.getElementById("checkall").checked = false;
                    break;
                }
            }
            if (j == c.length) {
                document.getElementById("checkall").checked = true;
            }
        }
        else {
            document.getElementById("checkall").checked = false;
            if (this.parentNode.parentNode.className == "odd") {
                this.parentNode.parentNode.style.backgroundColor = "aqua";
            } else {
                this.parentNode.parentNode.style.backgroundColor = "#f0f0f0";
            }

        }


    };
}
var checkall = document.getElementById("checkall");
checkall.onchange = function() {
    var c = document.getElementsByName("check");
    for (var j = 0; j < c.length; j++) {
		c[j].checked = this.checked;
		if (c[j].checked) c[j].parentNode.parentNode.style.backgroundColor = "yellow";
		else if (c[j].parentNode.parentNode.className == "odd")
		 	c[j].parentNode.parentNode.style.backgroundColor = "#dfdfdf";
		else c[j].parentNode.parentNode.style.backgroundColor = "#f0f0f0";		
	}
};

