import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import styles from './ideacard.module.css';

function IdeaCard({ title, brief, tag, createAt, onClick }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{brief}</Card.Text>
        <div className={styles['foot']}>
          <Badge bg="primary">{tag}</Badge>
          <Badge bg="secondary">{createAt}</Badge>
        </div>
      </Card.Body>
      <span className="stretched-link" onClick={onClick}></span>
    </Card>
  );
}

export default IdeaCard;
