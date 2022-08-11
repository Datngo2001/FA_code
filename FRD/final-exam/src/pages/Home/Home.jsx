import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAll, search } from '../../api/idea';
import IdeaSearchForm from '../../components/form/IdeaSearchForm';
import IdeaCard from '../../components/IdeaCard/IdeaCard';
import styles from './home.module.css';

function Home() {
  const [ideas, setIdeas] = useState([]);
  const { user } = useSelector((state) => state.user);

  const handleSearch = (term) => {
    console.log(term);
    search(term)
      .then((res) => {
        console.log(res);
        setIdeas(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAll()
      .then((res) => {
        console.log(res);
        setIdeas(res.data);
      })
      .catch((err) => console.log(err));
  }, [user?.id]);
  const handleCardClick = () => {
    console.log('click');
  };
  return (
    <div>
      <div className={styles['form-container']}>
        <IdeaSearchForm handleSubmit={handleSearch}></IdeaSearchForm>
      </div>
      <div className={styles['card-container']}>
        {ideas.map((idea) => (
          <IdeaCard
            key={idea.id}
            title={idea.title}
            brief={idea.brief}
            tag={idea.tag}
            createAt={convertDate(idea.createdAt)}
            onClick={handleCardClick}></IdeaCard>
        ))}
      </div>
    </div>
  );
}

function convertDate(input) {
  const date = new Date(input);
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1; // Months start at 0!
  let dd = date.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  return dd + '/' + mm + '/' + yyyy;
}

export default Home;
