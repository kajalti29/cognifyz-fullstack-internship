const list = document.getElementById("list")

async function addUser(){

const name = document.getElementById("name").value

await fetch("/api/users",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({name})

})

loadUsers()

}

async function loadUsers(){

const res = await fetch("/api/users")

const users = await res.json()

list.innerHTML=""

users.forEach((user,index)=>{

list.innerHTML += `
<li>
${user.name}
<button onclick="deleteUser(${index})">Delete</button>
</li>
`

})

}

async function deleteUser(index){

await fetch("/api/users/"+index,{
method:"DELETE"
})

loadUsers()

}

loadUsers()