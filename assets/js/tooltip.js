function showTooltipOnHover(targetElement, tooltipElementID) {
  // onHover over target
  targetElement.addEventListener('mouseover', () => {
    
    // by default tooltip is hidden
    document.getElementById(tooltipElementID).style.display = 'block'
    
    // displays popper
    Popper.createPopper(targetElement, document.getElementById(tooltipElementID), {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 10]
          }
        }]
    })
  })
  
  // not hover listener
  targetElement.addEventListener('mouseout', () => {
    document.getElementById(tooltipElementID).style.display = 'none'
  })
}

const ic_insta = document.getElementById('ic-instagram')
const ic_linkedin = document.getElementById('ic-linkedin')
const ic_github = document.getElementById('ic-github')

const ic_insta_sec = document.getElementById('ic-instagram-sec')
const ic_linkedin_sec = document.getElementById('ic-linkedin-sec')
const ic_github_sec = document.getElementById('ic-github-sec')


showTooltipOnHover(ic_insta, 'tt-insta')
showTooltipOnHover(ic_linkedin, 'tt-linkedin')
showTooltipOnHover(ic_github, 'tt-github')

showTooltipOnHover(ic_insta_sec, 'tt-insta')
showTooltipOnHover(ic_linkedin_sec, 'tt-linkedin')
showTooltipOnHover(ic_github_sec, 'tt-github')