import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getAll, search } from '../../api/idea';
import IdeaSearchForm from '../../components/form/IdeaSearchForm';
import IdeaCard from '../../components/IdeaCard/IdeaCard';
import { NeedLoginModal } from '../../components/modal/NeedLoginModal';
import { convertDate } from '../../util/convertDate';
import styles from './home.module.css';

function Home() {
  const [ideas, setIdeas] = useState([]);
  const { user } = useSelector((state) => state.user);
  const [show, setShow] = useState();
  const navigate = useNavigate();

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

  const handleCardClick = (id) => {
    return () => {
      if (!user) {
        setShow(true);
        return;
      }
      navigate(`/ideas/${id}`);
    };
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
            onClick={handleCardClick(idea.id)}></IdeaCard>
        ))}
      </div>
      <NeedLoginModal show={show} handleClose={() => setShow(false)}></NeedLoginModal>
    </div>
  );
}

export default Home;
