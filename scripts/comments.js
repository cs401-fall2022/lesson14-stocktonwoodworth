const post = document.getElementById("post");
post.addEventListener("click", function(){
    const commentBoxValue = document.getElementById("comments").value;

    const li = document.createElement("li");
    const text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("commentList").appendChild(li);

});
