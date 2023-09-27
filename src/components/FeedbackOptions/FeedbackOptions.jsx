import css from './Feedback.module.css'

export const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return(
        <ul className={css.statsList}>
          {options.map(option =>(
            <li key={option}>
            <button onClick={() => onLeaveFeedback(option)} className={css.buttonStats}>{option}</button>
          </li>
          ))}
        </ul>
    )
}