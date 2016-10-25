//	HYPE.documents["Tunes"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="Tunes.hyperesources",c="Tunes",e="tunes_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src;if(null!=b&&-1!=b.indexOf("tunes_hype_generated_script.js")){h=b.substr(0,b.lastIndexOf("/"));break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_530","HYPE_dtl_530",!0==(null!=a&&10>a||false==!0)?"HYPE-530.full.min.js":"HYPE-530.thin.min.js"),false==!0&&(a=a||l("HYPE_w_530","HYPE_wdtl_530","HYPE-530.waypoints.min.js")),a))return;
f=window.HYPE.documents;if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);for(var d=document.getElementsByTagName("div"),b=!1,a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),
d[b[a].name]=function(){}}a=new HYPE_530(c,e,{"0":{p:1,n:"sunset-blurred-background-freebie.jpg",g:"7",o:true,t:"@1x"},"1":{p:1,n:"sunset-blurred-background-freebie_2x.jpg",g:"7",o:true,t:"@2x"}},h,[],d,[{n:"Untitled Scene",o:"1",X:[0]}],[{o:"3",p:"600px",x:0,a:100,Z:640,cA:false,Y:480,b:100,c:"#FFFFFF",L:[],bY:1,d:480,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["17","16","15","14"],v:{"17":{aV:8,w:"Tunes",a:143,x:"visible",Z:"break-word",b:22,y:"preserve",j:"absolute",z:4,yy:"nowrap",s:"Futura,Verdana,sans-serif",aT:8,k:"div",aS:8,e:0.44560917721518989,t:64,G:"#929292",aU:8,r:"inline"},"16":{c:478,d:100,I:"None",e:0.24080300632911392,J:"None",K:"None",g:"#000000",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:3,P:0,D:"#D8DDE4",a:1,b:22},"15":{I:"None",x:"visible",a:90,J:"None",K:"None",j:"absolute",b:144,z:2,k:"div",L:"None",d:466,U:"iframe-htmlwidget.html",c:300,V:0,W:""},"14":{h:"7",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:480,k:"div",z:1,d:672}}}],{},g,{},
(function (shouldShow, mainContentContainer) {
	var loadingPageID = mainContentContainer.id + "_loading";
	var loadingDiv = document.getElementById(loadingPageID);

	if(shouldShow == true) {
		if(loadingDiv == null) {	
			loadingDiv = document.createElement("div");
			loadingDiv.id = loadingPageID;
			loadingDiv.style.cssText = "overflow:hidden;position:absolute;width:150px;top:40%;left:0;right:0;margin:auto;padding:2px;border:3px solid #BBB;background-color:#EEE;border-radius:10px;text-align:center;font-family:Helvetica,Sans-Serif;font-size:13px;font-weight:700;color:#AAA;z-index:100000;";
			loadingDiv.innerHTML = "Loading";
			mainContentContainer.appendChild(loadingDiv);
		}
 
		loadingDiv.style.display = "block";
		loadingDiv.setAttribute("aria-hidden", false);
		mainContentContainer.setAttribute("aria-busy", true);
	} else {
		loadingDiv.style.display = "none";
		loadingDiv.setAttribute("aria-hidden", true);
		mainContentContainer.removeAttribute("aria-busy");
	}
})

,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
