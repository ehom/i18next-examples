// import i18next from 'i18next';

i18next
  .use('i18next-intervalplural-postprocessor')
  .init({
    // lng: 'en',
    fallbackLng: 'en',
    whitelist: [ 'en', 'de', 'pl_PL', 'ja_JP' ],
    debug: true,
    resources: {
      en: {
        translation: {
          "key": "hello world",
          "apple": "apple",
          "apple_plural": "apples",
          "appleWithCount": "{{count}} apple",
          "appleWithCount_plural": "{{count}} apples",
        }
      },
      de: {
        translation: {
          "key": "hallo welt",
          "apple": "Apfel",
          "apple_plural": "Äpfel",
          "appleWithCount": "{{count}} Apfel",
          "appleWithCount_plural": "{{count}} Äpfel",
        }
      },
      'pl_PL': {
        translation: {
          "key": "Witaj świecie",
          "apple": "jabłko",
          "apple_plural": "jabłek",
          "appleWithCount": "{{count}} jabłko",
          "appleWithCount_plural": "{{count}} jabłek",
        }
      },
      'ja_JP': {
        translation: {
          "key": "Heero World",
          "appleWithCount": "{{count}}りんご",
          "appleWithCount_plural": "{{count}}りんご",
        }
      }      
    }
  }, function(err, t) {
    // init set content
    updateContent();
  });

function updateContent() {
  // https://www.i18next.com/api.html#t
  
  // document.getElementById('output').innerHTML = i18next.t('key');
 
  $('#output').html(
    i18next.t('key')
  );
  
  let arr = []; 
  
  for (var i = 0; i <= 10; ++i) {
    let t = i18next.t('appleWithCount', {count: i});
    arr.push(t);
  }
    
  $('#counting').html(
    arr.join(", ")
  )
}

i18next.on('languageChanged', updateContent);

$('button').click(
  function() {
    i18next.changeLanguage(
      $(this).val()
    );
  }
);
