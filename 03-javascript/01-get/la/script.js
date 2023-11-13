"use strict";
/*
componentWillMount()
{
    this.setLanguage('en');
};
setLanguage(language)
{
    i18next.init({
        lng: language,
        resources:
        require(`json!./${language}.json`)
    });
    this.props.actions.changeLanguage(i18next);
}
render()
{
    return (
        <div>
            <div>
                <button bsStyle="primary" onClick={this.setLanguage.bind(this,'en')}>English</button>
                <button bsStyle="primary" onClick={this.setLanguage.bind(this,'fr')}>Français</button>
            </div>
            <div>{i18next.t('test_message')}</div>
        </div>
    )
} */
const langArr = {
    h1: {
        en: 'My awesome site',
        fr: 'Mon site génial',
    },
    p: {
        en: 'This site offers you the most exciting content',
        fr: 'Ce site vous propose le contenu le plus passionnant',
    },
    btn: {
        en: 'Learn more',
        fr: 'Apprendre encore plus',
    },
};
document.querySelectorAll('.lang button')
.forEach((b) => b.addEventListener('click', setLang));
function setLang()
{
    for(let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if(elem) {
            elem.innerHTML = langArr[key][this.value];
        }
    }
}

//dog
