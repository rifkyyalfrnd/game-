const actions = [
    "hari ini caca harus minum air putih minimal 1 galon",
    "hari ini caca harus tetap semangat dan jangan lupa bersyukur",
    "hari ini caca harus istigfar 3x",
    "hari ini caca harus kayang 3 jam",
    "hari ini caca harus makan tapi gaboleh dikunyah",
    "hari ini caca harus stay cool abiss",
    "hari ini caca harus coba dengerin lagu give me your forever-zack tabudlo",
    "hari ini caca harus terima kalo mie goreng lebih enak dibandingin mie kuah",
];

document.getElementById('roll').addEventListener('click', function() {
    const roll = Math.floor(Math.random() * actions.length);
    const result = actions[roll];

    document.getElementById('result').textContent = `okee ${result}`;
    document.getElementById('restart').style.display = 'block';
});

document.getElementById('restart').addEventListener('click', function() {
    document.getElementById('result').textContent = '';
    document.getElementById('restart').style.display = 'none';
});
