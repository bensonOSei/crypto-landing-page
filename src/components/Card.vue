 <template>
    <div class="card" >
        <div class="card-icon">
            <Image :source="imageSource" />
        </div>
        <div class="card-text" >
            <div class="card-text-header">
                <h4>{{ mainText }}</h4>
                <p>{{ textAbbr }}</p>
            </div>
            <div class="card-text-main">
                <p>{{ cardText }}</p>
                <ButtonIcon text="Start mining" />
            </div>
        </div>
    </div>
</template>

<script>
import Image from './Images/Image.vue';
import ButtonIcon from './Buttons/ButtonIcon.vue';

    export default {
    name: "Card",
    props: {
        imageSource: String,
        imageAlt: String,
        mainText: String,
        textAbbr: String,
        cardText: String
    },
    components: { Image, ButtonIcon },
    // methods: {
    //     activateMe(){
    //         let cards = document.querySelectorAll('.card');
    //         cards.forEach(card => {
    //             card.classList.remove('active');
    //         });
    //         let card = this.$el;
    //         card.classList.add("active");
    //         // console.log(card);
    //     }
    // }
}
</script>


<!-- <style scoped>

</style> -->