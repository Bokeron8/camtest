var camera_element = document.getElementById("camera");
var button_row = document.getElementById("button_row");
var camera_area = document.getElementsByClassName("camera-area")[0];
var img = "https://imag.malavida.com/mvimgbig/download-fs/five-nights-at-freddys-14759-"
var imgs = [img+"1.jpg", img+"2.jpg", img+"3.jpg", img+"4.jpg", img+"5.jpg", img+"6.jpg", img+"7.jpg", "http://192.168.0.131:4747/video?640x480"]

for (var i = 0; i < imgs.length; i++){
    make_button(i)
}
function make_button(camera){
    let btn = document.createElement("button");
    btn.innerHTML = `Camera ${camera}`;
    btn.onclick = function (){
        show(camera);
    };
    var button_coloumns = button_row.children
    if (camera >=4){
        button_coloumns[1].appendChild(btn); 
    }
    else{
        button_coloumns[0].appendChild(btn); 
    }
}
function show(camera){
    camera_area.style.backgroundImage = `url('${imgs[camera]}')`;
}
function resize(img){
    img.height = "400" 
    img.width = "400" 
}
function play(){
    var url = document.getElementById("path").value;
    var url2 = document.getElementById("path2").value;
    document.getElementById('show').innerHTML='<img href="#" onclick="show()" id="movie" src="'+url+'" height="400px" width="400px" controls autoplay > </video>';
    document.getElementById('show2').innerHTML='<img  id="movie2" src="'+url2+'" height="400px" width="400px" controls autoplay > </video>';
    var player =document.getElementById('movie');
    var player2 =document.getElementById('movie2');
    player.style.transform = "rotate(90deg)";
    player.load();
    player2.load();
}