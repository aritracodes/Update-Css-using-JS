const inputs = document.querySelectorAll('.controls input');
// console.log(controls);

function handlerequest() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); 
}

inputs.forEach(input => input.addEventListener('change', handlerequest));
inputs.forEach(input => input.addEventListener('mousemove', handlerequest));