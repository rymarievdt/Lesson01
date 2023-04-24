import React from 'react';
import ReactDOM from 'react-dom';

function AstrologicalSigns() {
  return (
    <div>
      <h1>Знаки зодіаку</h1>
      <table>
        <thead>
          <tr><th>Зодіак</th><th>Період дії</th></tr>
        </thead>
        <tbody>
          <tr><td>Овен</td><td>21 березня - 20 квітня</td></tr>
          <tr><td>Телець</td><td>21 квітня - 21 травня</td></tr>
          <tr><td>Близнюки</td><td>22 травня - 21 червня</td></tr>
          <tr><td>Рак</td><td>22 червня - 22 липня</td></tr>
          <tr><td>Лев</td><td>23 липня - 23 серпня</td></tr>
          <tr><td>Діва</td><td>24 серпня - 22 вересня</td></tr>
          <tr><td>Терези</td><td>23 вересня - 23 жовтня</td></tr>
          <tr><td>Скорпіон</td><td>24 жовтня - 22 листопада</td></tr>
          <tr><td>Стрілець</td><td>23 листопада - 21 грудня</td></tr>
          <tr><td>Козоріг</td><td>22 грудня - 20 січня</td></tr>
          <tr><td>Водолій</td><td>21 січня - 20 лютого</td></tr>
          <tr><td>Риби</td><td>21 лютого - 20 березня</td></tr>
        </tbody>
      </table>
    </div>
  );
}

ReactDOM.render(<AstrologicalSigns></AstrologicalSigns>, document.getElementById('root'));
