function getRandom(max,min)
{
    return Math.floor(Math.random()*(max-min))+min;
}
const app = Vue.createApp({
    data(){
        return{

            playerHealth:100,
            monsterHealth:100,
            round:0,
            winner:null
        };
    },
    computed:{

    healthStyle(){
        if(this.playerHealth<0)
        return {width:'0%'}
        else
       return {width:this.playerHealth+'%'};
    },
    healthStyle2(){
        if(this.monsterHealth<0)
        return {width:'0%'}
        else
       return {width:this.monsterHealth+'%'};
    },
             
        

    },
    methods:{
        reset(){
            this.playerHealth=100;
            this.monsterHealth=100;
            this.round=0;
            this.winner=null;

        },
        playerAttack(){
            const att=getRandom(12,5);
            this.monsterHealth-=att;
            if(this.monsterHealth<=0)
            {

                this.winner="player";
            }
            else{

                
                this.monsterAttack();
            }
            this.round++;
        },
        monsterAttack(){
            const att= getRandom(15,8);
            this.playerHealth-=att;
            if(this.playerHealth<=0)
              this.winner="monster"
        },
        playerSpAtk()
        {
            const att = getRandom(20,15);
            this.monsterHealth-=att;
            this.playerHealth-=4;
           if(this.playerHealth<=0 && monsterHealth<=0)
           {
               this.winner='draw';
           }
           else if(this.playerHealth<0)
           {
               this.winner='monster';
           }
           else if(this.monsterHealth<=0)
           {
               this.winner='player';
           }
           else{

               this.monsterAttack();
               if(this.playerHealth<=0)
                 this.winner='monster';
            }   
               this.round++; 
        },
        heal()
        {
            var heal=getRandom(18,8);
            if(this.playerHealth+heal>100)
            this.playerHealth=100;
            else
            this.playerHealth+=heal;

            this.monsterAttack();
        },
        surrender()
        {
            this.winner='monster';
        }
    }
    

});

app.mount('#game');