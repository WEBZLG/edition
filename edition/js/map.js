
$(function(){
    var map = new BMap.Map("container"); 
          var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
          map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别     
          // window.setTimeout(function(){  
          //     map.panTo(new BMap.Point(116.409, 39.918));    
          // }, 2000); //延时移动到新的中心店
          map.addControl(new BMap.GeolocationControl()); 
          // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
          
    var marker=new BMap.Marker(new BMap.Point(116.3385086899,39.8835200261));  
    map.addOverlay(marker);  
    var licontent="<b>中国文化大厦1104</b><br>";  
        licontent+="<span>地址:西城区红莲南路57号</span><br>";  
         licontent+="<span class=\"input\"><input class=\"outset\" type=\"text\" name=\"origin\" value=\"北京西站\"/><input class=\"outset-but\" type=\"button\" value=\"公交\" onclick=\"gotobaidu(1)\" /><input class=\"outset-but\" type=\"button\" value=\"驾车\"  onclick=\"gotobaidu(2)\"/><a class=\"gotob\" href=\"url=\"http://api.map.baidu.com/direction?destination=latlng:"+marker.getPosition().lat+","+marker.getPosition().lng+"|name:中国文化大厦1104"+"®ion=北京"+"&output=html\" target=\"_blank\"></a></span>";
  
    var hiddeninput="<input type=\"hidden\" value=\""+'北京'+"\" name=\"region\" /><input type=\"hidden\" value=\"html\" name=\"output\" /><input type=\"hidden\" value=\"driving\" name=\"mode\" /><input type=\"hidden\" value=\"latlng:"+marker.getPosition().lat+","+marker.getPosition().lng+"|name:中国文化大厦1104"+"\" name=\"destination\" />";
  
    var content1 ="<form id=\"gotobaiduform\" action=\"http://api.map.baidu.com/direction\" target=\"_blank\" method=\"get\">" + licontent +hiddeninput+"</form>";
   
    var opts1 = { width: 300 };  
        
    var  infoWindow = new BMap.InfoWindow(content1, opts1);  
    marker.openInfoWindow(infoWindow);  
    marker.addEventListener('click',function(){
        marker.openInfoWindow(infoWindow);
    });  
})
function gotobaidu(type) {  
        if($.trim($("input[name=origin]").val())=="")  
        {  
            alert("请输入起点！");  
            return;  
        }else{  
            if(type==1)  
            {  
                $("input[name=mode]").val("transit");  
                $("#gotobaiduform")[0].submit();  
            }else if(type==2)  
            {      
                $("input[name=mode]").val("driving");          
                $("#gotobaiduform")[0].submit();  
            }  
        }  
    }   



