import css from './Feedback.module.css'

export const FeedbackOptions = ({onLeaveFeedback}) => {
    return(
        <ul className={css.statsList}>
          <li>
            <button onClick={() => onLeaveFeedback('good')} className={css.buttonStats}>Good</button>
          </li>
          <li>
            <button onClick={() => onLeaveFeedback('neutral')} className={css.buttonStats}>
              Neutral
            </button>
          </li>
          <li>
            <button onClick={() => onLeaveFeedback('bad')} className={css.buttonStats}>Bad</button>
          </li>
        </ul>
    )
}