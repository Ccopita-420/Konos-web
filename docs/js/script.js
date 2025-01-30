function showContent(sectionId) {
    const content = document.getElementById('content');
    const contentTitle = document.getElementById('contentTitle');
    const contentText = document.getElementById('contentText');

    if (sectionId === 'section1') {
        contentTitle.textContent = 'Sección 1';
        contentText.textContent = 'Contenido de la sección 1.';
    } else if (sectionId === 'section2') {
        contentTitle.textContent = 'Sección 2';
        contentText.textContent = 'Contenido de la sección 2.';
    } else if (sectionId === 'section3') {
        contentTitle.textContent = 'Sección 3';
        contentText.textContent = 'Contenido de la sección 3.';
    } else if (sectionId === 'section4') {
        contentTitle.textContent = 'Sección 4';
        contentText.textContent = 'Contenido de la sección 4.';
    }
    }
