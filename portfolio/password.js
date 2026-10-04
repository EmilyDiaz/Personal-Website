const CASE_STUDY_PASSWORD = 'bah!2022'
const caseStudies = {
    decisionevaluationsproject: {
        title: 'Attorney Performance Evaluations',
        url: 'decisionevaluations/',
    },
    hearingproject: {
        title: 'Scheduling Hearings for Veterans',
        url: 'hearings/',
    },
}

const caseId = new URLSearchParams(window.location.search).get('case')
const caseStudy = caseStudies[caseId]

if (!caseStudy) {
    window.location.replace('index.html')
} else {
    const title = document.getElementById('case-study-title')
    const form = document.getElementById('password-form')
    const passwordInput = document.getElementById('case-study-password')
    const errorMessage = document.getElementById('password-error')

    title.textContent = caseStudy.title
    document.title = `${caseStudy.title} | Password Required`

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        if (passwordInput.value === CASE_STUDY_PASSWORD) {
            window.location.assign(caseStudy.url)
            return
        }

        passwordInput.value = ''
        passwordInput.setAttribute('aria-invalid', 'true')
        errorMessage.textContent = 'That password did not match. Try again.'
        passwordInput.focus()
    })

    passwordInput.addEventListener('input', () => {
        passwordInput.removeAttribute('aria-invalid')
        errorMessage.textContent = ''
    })
}