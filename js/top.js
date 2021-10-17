function onClick(){
    //テキストボックスの値を取得
    var value = document.getElementById("text").value;
    var element = document.getElementById('area');
    var count = getRandomInt(10000);
    var post = '<div id="post' + count + '"> <p>' + value + '</p> <button class="btn" onclick="deleteBtn(this)">削除</button> </div>';

    //値を設定する
    element.insertAdjacentHTML('afterbegin', post);

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function deleteBtn(event){
    event.parentNode.remove();
}
  