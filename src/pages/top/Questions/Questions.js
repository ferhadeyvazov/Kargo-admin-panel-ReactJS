import React, { useState } from 'react';
import './Questions.scss';
import { questions } from '../../../constants/questionsData';
import { category } from '../../../constants/categoryQuestions';
import { useDispatch, useSelector } from 'react-redux';
import { choose_category_function } from '../../../redux/questions/questionsAction';
import BalanceSystemTitle from '../../../components/BalanceSsytemTitleandOthers';
import qImg from '../../../assets/headerLinksImage/Question.svg';
const Questions = () => {
  const { categoryQuestions } = useSelector((state) => state.questionReducer);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);

  const toogle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="main-questions  system_main">
      <div className="questions  system_container">
        <BalanceSystemTitle SistemySvg={qImg} title={'Sıkca Sorulan Sorular'} />
        <div className="main-questions-boxes ">
          <div className="questions-left-box">
            <div className="category-button">
              <button>Category</button>
            </div>
            <div className="category-questions">
              <p> Order about</p>
              <ul>
                {category.map((cat) => {
                  return (
                    <li
                      onClick={() =>
                        dispatch(choose_category_function(cat.category))
                      }
                      key={cat.category}
                    >
                      <span
                        className={
                          cat.category === categoryQuestions &&
                          'active_question'
                        }
                      >
                        {cat.category}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="questions-right-box">
            <div className="category-button">
              <button>Questions</button>
            </div>
            <div className="wrapper">
              <div className="accordion">
                {questions.map((item, i) => {
                  return (
                    item.category === categoryQuestions && (


                      <div key={i} className="item">

                        <div className="title" onClick={() => toogle(i)}>
                          <p>{item.question}</p>
                          <span>
                            {selected === i ? (
                              <i className="fas fa-sort-down"></i>
                            ) : (
                              <i className="fas fa-sort-up"></i>
                            )}
                          </span>
                        </div>
                        <div
                          className={
                            selected === i ? 'content show' : 'content'

                          }
                        >
                          {item.answer}
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
// {
/* {questions.map((item, i) => (
                <div key={item.id} className="item">
                  <div className="title" onClick={() => toogle(i)}>
                    <p>{item.question}</p>
                    <span>{selected === i ? '⮟' : '⮝'}</span>
                  </div>
                  <div className={selected === i ? 'content show' : 'content'}>
                    {item.answer}
                  </div>
                </div>

              ))} */
// }
