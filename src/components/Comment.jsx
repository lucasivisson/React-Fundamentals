import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    /*Entendendo Clousure:
    Usamos a função para setar o valor no setState, pois dessa forma o react consegue nos dar via
    parametro o valor mais atualizado daquele state, caso tivessemos que incrementar esse valor     
    várias vezes seguidas, o react provavelmente iria trazer o valor do state daquele contexto
    que nao tinha sido atualizado ainda, ou seja, um valor desatualizado. */
    setLikeCount((state) => {
      return state + 1;
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/lucasivisson.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Ivisson</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 09:15:24">Cerca de 1h atrás</time>
            </div>
              <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={24}></Trash>
              </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}