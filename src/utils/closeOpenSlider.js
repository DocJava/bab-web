export default function closeOpenSlider() {
    const openSliders = document.getElementsByClassName('item-sliding-active-slide');
    if (openSliders.length) {
        openSliders[0].close();
    }

}