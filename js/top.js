function onClick(){
    //テキストボックスの値を取得
    var value = document.getElementById("text").value;
    var element = document.getElementById('area');
    const first = document.getElementById('first'); 
    //値を設定する
    element.insertAdjacentHTML('afterbegin', '<p>' + value + '</p>');
    first.remove();
}