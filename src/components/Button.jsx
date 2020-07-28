import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

export default function Button({ className, outline, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "button",
        className,
        {
          "button--outline": outline,
        },
        {
          "button--filled": children,
        }
      )}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
}
