document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const resumeDataParam = urlParams.get('resumeData');
    
    if (resumeDataParam) {
        try {
            const resumeData = JSON.parse(decodeURIComponent(resumeDataParam));
            
            if (resumeData.publications && resumeData.publications.length) {
                const publicationItems = document.querySelectorAll('.timeline-item');
                
                if (publicationItems.length > 0) {
                    publicationItems.forEach((item, index) => {
                        if (resumeData.publications[index] && resumeData.publications[index].links) {
                            const linksContainer = item.querySelector('.publication-links');
                            if (linksContainer) {
                                linksContainer.innerHTML = `
                                    <a href="${resumeData.publications[index].links}" target="_blank" class="publication-link">
                                        <ion-icon name="document-outline"></ion-icon>
                                        <span>View Paper</span>
                                    </a>
                                `;
                            }
                        }
                    });
                }
            }
        } catch (error) {
            console.error('Error parsing resume data:', error);
        }
    }
}); 