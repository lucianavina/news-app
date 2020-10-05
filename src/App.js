import React,{useState, useEffect} from 'react';
import Header from './Components/Header/index'
import Form from './Components/Form/index'
import NewsList from './Components/NewsList/index'


function App() {

//setting category and news
  
  const [category, saveCategory] = useState('')
  const [news, saveNews] = useState([])
  
  useEffect(() => {
    
    const callApi = async() => {

      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=75194dfc24104c65b487259a38faa3f0`
  
      const response = await fetch(url)
      const news = await response.json()

      saveNews(news.articles)
      
    }
    callApi()

  }, [category])


  return (
    <>
      <Header
        title='Buscador de Noticias'
      />
      <div className='conatiner white'>
        <Form
          saveCategory={saveCategory}
        />
        <NewsList 
          news={news}
        />
      </div>
    </>
  );
}

export default App;
