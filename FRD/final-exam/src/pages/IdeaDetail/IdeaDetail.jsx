import React, { useEffect } from 'react';
import { useState } from 'react';
import { Badge } from 'react-bootstrap';
import { useParams } from 'react-router';
import { getId } from '../../api/idea';
import { convertDate } from '../../util/convertDate';

function IdeaDetail() {
  const { id } = useParams();
  const [idea, setIdea] = useState(null);

  useEffect(() => {
    getId(id)
      .then((res) => {
        console.log(res);
        setIdea(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {idea ? (
        <div style={{ width: '700px', maxWidth: '100%', margin: 'auto' }}>
          <h1 style={{ marginTop: '2rem' }}>{idea.title}</h1>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', lineHeight: '1.7' }}>{idea.brief}</p>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.7' }}>{idea.detail}</p>
          <p>Last modified: {convertDate(idea.updatedAt)}</p>
          <p>
            Tag:
            <Badge style={{ color: '#fff', marginLeft: '5px' }} bg="primary">
              {idea.tag}
            </Badge>
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default IdeaDetail;
