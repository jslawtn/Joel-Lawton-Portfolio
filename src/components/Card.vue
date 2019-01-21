<style>
@font-face {
  font-family: centuryGothic;
  src: url("../assets/fonts/GOTHIC.TTF");
}
.card{
  width: 600px;
  height: 300px;
  margin: 20px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  box-shadow: 5px 5px 15px #000000;
  transition: 1s;
  display: flex;
  flex-direction: column;
  font-family: centuryGothic;
}
.card:hover{
    transform: scale(1.2);
    box-shadow: 5px 5px 40px #000000;
}
.card img{
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: 1s;
}
.card:hover img{
    filter: blur(2px);
    transform: scale(1.2);
}
.card-body{
    width:50%;
    opacity: 0;
    padding: 20px;
    position: absolute;
    color: #ffffffad;
    transform: translateY(30%);
    transition: 1s;
    right:0;
}
.card:hover .card-body{
    opacity: 1;
    transform: translateY(0);
}
.card-link{
    font-size: 14px;
    transition: 0.1s;
    bottom: 0;
}
.card-link:hover{
    cursor: pointer;
    text-decoration: underline;
    top: 0;
}
.card-link:active{
    color: #ffffff1c;
}
</style>

<template>
    <section class="card">
        <img src="images/ReiBanner.jpg" />
        <div class="card-body">
            <p>Rei is an action adventure game developed in 2018. Developed by a group of 5 Rei was created for my final Univeristy project ...</p>
            <a class="card-link">Read More</a>
        </div>
    </section>
</template>

<script>
export default {
    props:{
        cardData:{}
    },
    data(){
        return{
        }
    },
    created:function(){
    },
    methods:{
    }
}
</script>