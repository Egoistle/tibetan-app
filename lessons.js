const lesson = lessons[index];
let html = `<h2>${lesson.title}</h2><p>${lesson.body}</p>`;

lesson.examples.forEach(function (ex) {
    html += `
        <div class="example">
        <p lang="bo">${ex.tibetan}</p>
        <p class="answer">${ex.wylie}</p>
        <p>${ex.english}</p>
        </div>
        `;
});