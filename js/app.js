var serverIP = 'http://chartez.suyun2006.com'
var serverAddress = serverIP + '/chartEz/m/'
var storage = window.localStorage

window.callAjax = function(url, para, callBack) {
	$.ajax({
		url: serverAddress + url,
		data: para,
		contentType: "application/x-www-form-urlencoded",
		type: 'POST',
		dataType: 'json',
		success: function(result) {
			callBack(result)
		}
	})
}



//解决frame高度
var iframe = $('#pageFrame')[0]
if (iframe) {
	setInterval(function() {
		var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
		if (iframeWin.document.body) {
			iframe.height = iframeWin.document.body.scrollHeight;
		}
	}, 200)
}

//工具方法
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}


function printSelect(tag,data,key,value) {
	var target = document.getElementById(tag);
	var html = '<option value="">请选择</option>'
	for (var x = 0; x < data.length; x++) {
		var tempName="";
		if(data[x][value] != undefined){
			tempName=data[x][value];
		}
		html += '<option class="'+tag+'Option" value="' + data[x][key] + '">' + tempName + '</option>'
	}
	target.innerHTML += html
	form.render();
}

function toJson(para){
	try {
		eval('var temp = ' + para)
		if (temp) {
			var optionStr = JSON.stringify(temp)
			return optionStr;			
		} else {
			layer.msg('字符串解析异常')
		}
	} catch (e) {
		layer.msg('字符串解析异常')
	}
	return false		
}

//判断是否有值
function isnull(obj) {
	if (typeof (obj) == "undefined") {
		obj = "";
	}
	return obj;
}

//根据url做hash，避免事件注册的重复
function urlHash() {
	var str = window.location.href
    var h = 0
    var len = str.length
    var t = 2147483648
    for (var i = 0; i < len; i++) {
        h = 31 * h + str.charCodeAt(i)
        if (h > 2147483647) h %= t
    }
    return h
}