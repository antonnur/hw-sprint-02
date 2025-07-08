import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type SuperButtonPropsType = DefaultButtonPropsType & {
  xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = ({
  xType,
  className,
  disabled,
  ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
}) => {
  // 1. Начинаем с базового класса кнопки s.button
  // 2. Добавляем дополнительный класс в зависимости от условий:
  //    - Если кнопка disabled, добавляем класс s.disabled
  //    - Иначе проверяем xType:
  //      * Если 'red', добавляем класс s.red
  //      * Если 'secondary', добавляем класс s.secondary
  //      * В остальных случаях добавляем класс s.default
  // 3. В конце добавляем пользовательский класс из className, если он есть
  const finalClassName =
    s.button +
    (disabled
      ? ' ' + s.disabled
      : xType === 'red'
      ? ' ' + s.red
      : xType === 'secondary'
      ? ' ' + s.secondary
      : ' ' + s.default) +
    (className ? ' ' + className : '') // задачка на смешивание классов

  return (
    <button
      disabled={disabled}
      className={finalClassName}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  )
}

export default SuperButton
