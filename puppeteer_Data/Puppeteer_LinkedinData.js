// IMPORTED PACKAGES
const puppeteer = require('puppeteer-extra');
const pluginStealth = require("puppeteer-extra-plugin-stealth")
puppeteer.use(pluginStealth())

// FUNCTION THAT TAKES AS ARGUMENT LINKEDING PROFILE LINK AND WILL SCRAPE IT GETTING ALL THE NECESSARY INFOMATION FOR FILLING UP THE CV
async function giveMeData(profile) {
// LUNCHING PUPPETEER
    const result = await puppeteer.launch({
        headless: true
    }).then(async browser => {
        try {
            const page = await browser.newPage()
            await page.setViewport({
                width: 1000,
                height: 1200
            })
// LOGINING IN
            await page.goto("https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin");
            await page.type("[id=username]", "saneacool@yahoo.com");
            await page.type("[id=password]", "Griskevici1988");
            await page.click("[type=submit]")
            await page.waitFor(1000);
            await page.goto(profile);
            
//GET PROFILE PHOTO
            const shortProfile = profile.split("in/")[1];
            const pic = await page.$('.EntityPhoto-circle-9')
            await page.waitFor(1000);
            await pic.screenshot({
                path: `profile_picture/${shortProfile}.jpg`
            });
// OPEN CONTACT INFO MODAL
            if ((await page.$('a[data-control-name="contact_see_more"]')) !== null) {
                await page.click('a[data-control-name="contact_see_more"]')
            }
// GET CONTACT DATA 
            const contactData = await page.evaluate(() => {
                function verify(data) {
                    return (data !== undefined && data !== null) ? data : ""
                }
                let contacts = [];
                Array.from(document.querySelectorAll("section.pv-contact-info__contact-type")).forEach(el => {
                    let contactObj = {
                        Type: verify(el.querySelector(".pv-contact-info__header")).innerText,
                        contact: verify(el.querySelector("div.pv-contact-info__ci-container") ? el.querySelector("div.pv-contact-info__ci-container") : el.querySelector("ul li a")).innerText
                        
                    }
                    contacts.push(contactObj)
                })
return contacts
            })
            await page.keyboard.press('Escape')
            await autoScroll(page)
// OPEN SECTIONS WITH SHOW MORE BUTTONS

            if ((await page.$('section.education-section button.pv-profile-section__see-more-inline')) !== null) {
                await page.click('section.education-section button.pv-profile-section__see-more-inline')
            }
            if ((await page.$('section.pv-skill-categories-section button.pv-skills-section__additional-skills')) !== null) {
                await page.click('section.pv-skill-categories-section button.pv-skills-section__additional-skills')
            }
            if ((await page.$('section.pv-accomplishments-section button')) !== null) {
                await page.click('section.pv-accomplishments-section button')
            }
            if ((await page.$('#projects-title + button li svg')) !== null) {
                await page.click('#projects-title + button li svg')
            }
            if ((await page.$('#languages-title + button li svg')) !== null) {
                await page.click('#languages-title + button li svg')
            }
            if ((await page.$('#courses-title + button li svg')) !== null) {
                await page.click('#courses-title + button li svg')
            }
           
            if ((await page.$('section.pv-about-section a')) !== null) {
                await page.click('section.pv-about-section a')
            }
            await page.waitFor(1000);
// PROFILE INFO SCAN
            const cvData = await page.evaluate(() => {
                let obj = {};

                function verify(data) {
                    return (data !== undefined && data !== null) ? data : ""
                }
// HEADER INFO SCRAPING
                obj.profileImage = verify(document.querySelectorAll("img.pv-top-card-section__photo")[0]).src
                obj.profileFullName = verify(document.querySelectorAll("li.t-24")[0]).innerText
                obj.profileHeadline = verify(document.querySelectorAll("h2.t-18")[0]).innerText
                obj.profileLocation = verify(document.querySelectorAll("ul.pv-top-card-v3--list-bullet li")[0]).innerText
                obj.profileAbout = [];
                Array.from(document.querySelectorAll("section.pv-about-section span")).forEach((item) => {
                    obj.profileAbout.push(item.innerText)
                })
                obj.profileExperience = [];
                obj.profileEducation = [];
// EXPERIENCE SECTION SCRAPING
                Array.from(document.querySelectorAll("section.experience-section button")).forEach(el => el.click())
                const ExpLength = Array.from(document.querySelectorAll("section.experience-section ul li.pv-entity__position-group-pager")).length

                for (let i = 0; i < ExpLength; i++) {
                    if ((document.querySelectorAll("section.experience-section ul li.pv-entity__position-group-pager")[i]).querySelector("p.pv-entity__secondary-title")) {
                        var detailedExp = {
                            jobTitle: verify(document.querySelectorAll("section.experience-section ul li h3")[i]).innerText,
                            jobEmployer: verify(document.querySelectorAll("section.experience-section ul li")[i].querySelector("p.pv-entity__secondary-title")).innerText,
                            jobPeriod: verify(document.querySelectorAll("section.experience-section ul li")[i].querySelector("h4.pv-entity__date-range span + span")).innerText,
                            jobLocation: verify(document.querySelectorAll("section.experience-section ul li")[i].querySelector("h4.pv-entity__location span + span")).innerText,
                            jobDescription: verify(document.querySelectorAll("section.experience-section ul li")[i].querySelector("p.pv-entity__description")).innerText

                        }
                        obj.profileExperience.push(detailedExp)
                    } else {
                        
                        let jobsDescr = [];
                        let Employer = verify(document.querySelectorAll("section.experience-section ul li.pv-entity__position-group-pager")[i].querySelector("h3 span + span")).innerText;
                        document.querySelectorAll("section.experience-section ul li.pv-entity__position-group-pager")[i].querySelectorAll("ul li").forEach((item) => {
                            jobsDescr.
                            push({
                                jobEmployer: Employer,
                                jobTitle: verify(item.querySelector("h3 span + span")).innerText,
                                jobPeriod: verify(item.querySelector("h4 span + span")).innerText,
                                jobPeriodDuration: verify(item.querySelector("h4 + h4 span + span")).innerText,
                                jobLocation: verify(item.querySelector("div + h4 span + span")).innerText,
                                jobDescription: verify(item.querySelector("p.pv-entity__description")).innerText
                            })
                        })
                        jobsDescr.forEach(el => obj.profileExperience.push(el))
                            
                    }
                }
// EDUCATION SECTION SCRAPING
                const eduLength = Array.from(document.querySelectorAll("section.education-section ul li")).length
                for (let j = 0; j < eduLength; j++) {
                    var detailedEdu = {
                        educationInstitution: verify(document.querySelectorAll("section.education-section ul li h3.pv-entity__school-name")[j]).innerText,
                        educationType: [],
                        educationPeriod: verify(document.querySelectorAll("section.education-section ul li p.pv-entity__dates span + span")[j]).innerText,
                        educationHighlights: verify(document.querySelectorAll("section.education-section ul li p.pv-entity__description")[j]).innerText

                    }
                    Array.from(document.querySelectorAll("section.education-section ul li")[j].querySelectorAll("span.pv-entity__comma-item")).forEach((item) => {
                        detailedEdu.educationType.push(item.innerText)
                    })
                    obj.profileEducation.push(detailedEdu)
                }
// SKILLS, LANGUAGES, COURSES, PROJECTS SECTIONS SCRAPING
                obj.skills = verify(Array.from(document.querySelectorAll("span.pv-skill-category-entity__name-text")).map(el => el.innerText))
                obj.languages = verify(Array.from(document.querySelectorAll("div#languages-expandable-content li")).map(el => el.innerText))
                obj.courses = verify(Array.from(document.querySelectorAll("div#courses-expandable-content li")).map(el => el.innerText))
                obj.projects = []

                Array.from(document.querySelectorAll("div#projects-expandable-content ul li.pv-accomplishment-entity--expanded")).forEach(el => {
                    let accompObj = {
                        title: verify(el.querySelector("h4.pv-accomplishment-entity__title").innerText.split("\n")[1]),
                        desc: verify(el.querySelector("p.pv-accomplishment-entity__description").innerText)
                        
                    }
                    obj.projects.push(accompObj)
                })

                return obj
            });

            contactData.forEach(el => cvData[el.Type] = el.contact)
            return cvData
        } catch (err) {
            console.error(err.message);
        } finally {

            await browser.close();
        }
    });
// RETURN A BIG OBJECT WITH ALL INFO FROM PROFILE(NO DATA SECTIONS ARE LEFT EMPTY STRINGS)
    return result
}
// HELPING FUNCTION TO IMPLEMENT AUTOSCROLL AGAINST LAZY LOADING...
async function autoScroll(page) {
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}
// EXPORT MAIN FUNCTION
module.exports = giveMeData