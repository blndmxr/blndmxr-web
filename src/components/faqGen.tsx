import useUniqueId from './use-unique-id'
import React from 'react'
import { UncontrolledCollapse } from 'reactstrap'

export default function faqGen(question: string, answer: string) {
    // eval is pretty dangerous
  const uniqueId = useUniqueId();
  return (
    <div>
      <div
        id={uniqueId}
        className="faq-linebreak"
      >
        {eval(question)} 
      </div>
      <UncontrolledCollapse
        toggler={uniqueId}
        style={{ marginLeft: 50, marginBottom: 0 }}
      >
        {eval(answer)}
      </UncontrolledCollapse>
    </div>
  )
}
