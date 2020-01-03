import React from "react"
import styled from "styled-components"
import SmartQuote from "./smart-quote"

//
// Field Control Group styles
//

const FieldControlGroup = styled.div`
  grid-area: control-group;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "control";
  height: 2em;
`

const FieldRightDecoratedControlGroup = styled(FieldControlGroup)`
  grid-template-columns: 1fr auto;
  grid-template-areas: "control decorator";
`

const FieldLeftDecoratedControlGroup = styled(FieldControlGroup)`
  grid-template-columns: auto 1fr;
  grid-template-areas: "decorator control";
`

const FieldDoubleControlGroup = styled(FieldControlGroup)`
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: "control decorator-middle control2";
`

const FieldDoubleRightDecoratedControlGroup = styled(FieldControlGroup)`
  grid-template-columns: 1fr auto 1fr auto;
  grid-template-areas: "control decorator-middle control2 decorator";
`

const FieldDoubleLeftDecoratedControlGroup = styled(FieldControlGroup)`
  grid-template-columns: auto 1fr auto 1fr;
  grid-template-areas: "decorator control decorator-middle control2";
`

//
// Field Control styles
//

const FieldControl = styled.input`
  grid-area: control;
  border: none;
  border-bottom-left-radius: 0.4em;
  border-bottom-right-radius: 0.4em;
  height: inherit;
  outline: none;
  padding-left: 1em;
  padding-right: 0.25em;
  font-size: 0.9em;
  background: #a0a0a0;
  color: #404040;
  font-family: Solway, san-serif;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
`

const FieldRightDecoratedControl = styled(FieldControl)`
  border-bottom-left-radius: 0.4em;
  border-bottom-right-radius: 0;
`

const FieldLeftDecoratedControl = styled(FieldControl)`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0.4em;
`

const FieldDoubleDecoratedControl = styled(FieldControl)`
  border-radius: 0;
`

//
// Field Decorator styles
//

const FieldMiddleDecorator = styled.div`
  grid-area: decorator-middle;
  display: grid;
  align-items: center;
  justify-items: center;
  white-space: nowrap;
  vertical-align: middle;
  color: rgba(255, 127, 80, 0.8);
  background: #404040;
  padding-left: 0.5em;
  padding-right: 0.5em;
  font-family: Solway, san-serif;
  border-radius: 0;
`

const FieldRightDecorator = styled(FieldMiddleDecorator)`
  grid-area: decorator;
  border-bottom-right-radius: 0.4em;
  min-width: 2em;
`

const FieldLeftDecorator = styled(FieldMiddleDecorator)`
  grid-area: decorator;
  border-bottom-left-radius: 0.4em;
  min-width: 2em;
`

//
// Field Label style
//

const FieldLabel = styled.span`
  display: grid;
  align-items: center;
  justify-self: stretch;
  grid-area: label;
  vertical-align: middle;
  padding: 0.25em;
  padding-left: 0.5em;
  color: coral;
  background: #404040;
  border-top-left-radius: 0.4em;
  border-top-right-radius: 0.4em;
  border-bottom: solid 1px;
  border-bottom-color: rgba(255, 127, 80, 0.6);
`

//
// FieldContainer style
//

const FieldContainer = styled.div``

//
// Single Field component and associated
// style
//

const NakedField = props => {
  const isReadOnly =
    props.inputProps.readOnly !== null ? props.inputProps.readOnly : false

  if (props.decorator) {
    var Group, Control, Decorator
    if (props.decoratorPosition && props.decoratorPosition === "left") {
      Group = FieldLeftDecoratedControlGroup
      if (isReadOnly) {
        Control = styled(FieldLeftDecoratedControl)`
          background: #686868;
          color: #282828;
        `
      } else {
        Control = FieldLeftDecoratedControl
      }
      Decorator = FieldLeftDecorator
    } else {
      Group = FieldRightDecoratedControlGroup
      if (isReadOnly) {
        Control = styled(FieldRightDecoratedControl)`
          background: #686868;
          color: #282828;
        `
      } else {
        Control = FieldRightDecoratedControl
      }
      Decorator = FieldRightDecorator
    }
    return (
      <FieldContainer className={props.className}>
        <FieldLabel>
          <SmartQuote>{props.label}</SmartQuote>
        </FieldLabel>
        <Group>
          <Control
            id={props.inputProps.id}
            type={props.inputProps.type}
            defaultValue={props.inputProps.defaultValue}
            onFocus={props.inputProps.onFocus}
            onBlur={props.inputProps.onBlur}
            onChange={props.inputProps.onChange}
            readOnly={isReadOnly}
          />
          <Decorator>
            <SmartQuote>{props.decorator}</SmartQuote>
          </Decorator>
        </Group>
      </FieldContainer>
    )
  } else {
    var Control
    if (isReadOnly) {
      Control = styled(FieldControl)`
        background: #686868;
        color: #282828;
      `
    } else {
      Control = FieldControl
    }
    return (
      <FieldContainer className={props.className}>
        <FieldLabel>
          <SmartQuote>{props.label}</SmartQuote>
        </FieldLabel>
        <FieldControlGroup>
          <Control
            id={props.inputProps.id}
            type={props.inputProps.type}
            defaultValue={props.inputProps.defaultValue}
            onFocus={props.inputProps.onFocus}
            onBlur={props.inputProps.onBlur}
            onChange={props.inputProps.onChange}
            readOnly={isReadOnly}
          />
        </FieldControlGroup>
      </FieldContainer>
    )
  }
}

export const Field = styled(NakedField)`
  display: grid;
  grid-template-areas:
    "label"
    "control-group";
  padding: 0.5em;
`

//
// Double Field component and associated
// style
//

const NakedDoubleField = props => {
  const isLeftReadOnly =
    props.inputPropsLeft.readOnly !== null
      ? props.inputPropsLeft.readOnly
      : false
  const isRightReadOnly =
    props.inputPropsRight.readOnly !== null
      ? props.inputPropsRight.readOnly
      : false

  if (props.decorator) {
    var Group, Control1, Control2, Decorator
    if (props.decoratorPosition && props.decoratorPosition === "left") {
      Group = FieldDoubleLeftDecoratedControlGroup
      if (isLeftReadOnly) {
        Control1 = styled(FieldDoubleDecoratedControl)`
          background: #686868;
          color: #282828;
        `
      } else {
        Control1 = FieldDoubleDecoratedControl
      }
      if (isRightReadOnly) {
        Control2 = styled(FieldLeftDecoratedControl)`
          background: #686868;
          color: #282828;
          grid-area: control2;
        `
      } else {
        Control2 = styled(FieldLeftDecoratedControl)`
          grid-area: control2;
        `
      }
      Decorator = FieldLeftDecorator
    } else {
      Group = FieldDoubleRightDecoratedControlGroup
      Control1 = FieldRightDecoratedControl
      Control2 = styled(FieldDoubleDecoratedControl)`
        grid-area: control2;
      `
      Decorator = FieldRightDecorator
    }
    return (
      <FieldContainer className={props.className}>
        <FieldLabel>
          <SmartQuote>{props.label}</SmartQuote>
        </FieldLabel>
        <Group>
          <Control1
            id={props.inputPropsLeft.id}
            type={props.inputPropsLeft.type}
            defaultValue={props.inputPropsLeft.defaultValue}
            onFocus={props.inputPropsLeft.onFocus}
            onBlur={props.inputPropsLeft.onBlur}
            onChange={props.inputPropsLeft.onChange}
            readOnly={isLeftReadOnly}
          />
          <FieldMiddleDecorator>
            <SmartQuote>{props.middleDecorator}</SmartQuote>
          </FieldMiddleDecorator>
          <Control2
            id={props.inputPropsRight.id}
            type={props.inputPropsRight.type}
            defaultValue={props.inputPropsRight.defaultValue}
            onFocus={props.inputPropsRight.onFocus}
            onBlur={props.inputPropsRight.onBlur}
            onChange={props.inputPropsRight.onChange}
            readOnly={isRightReadOnly}
          />
          <Decorator>
            <SmartQuote>{props.decorator}</SmartQuote>
          </Decorator>
        </Group>
      </FieldContainer>
    )
  } else {
    var Control1 = FieldRightDecoratedControl,
      Control2 = FieldLeftDecoratedControl
    if (isLeftReadOnly) {
      Control1 = styled(FieldRightDecoratedControl)`
        background: #686868;
        color: #282828;
      `
    }
    if (isRightReadOnly) {
      Control2 = styled(FieldLeftDecoratedControl)`
        background: #686868;
        color: #282828;
      `
    }
    return (
      <FieldContainer className={props.className}>
        <FieldLabel>
          <SmartQuote>{props.label}</SmartQuote>
        </FieldLabel>
        <FieldDoubleControlGroup>
          <Control1
            id={props.inputPropsLeft.id}
            type={props.inputPropsLeft.type}
            defaultValue={props.inputPropsLeft.defaultValue}
            onFocus={props.inputPropsLeft.onFocus}
            onBlur={props.inputPropsLeft.onBlur}
            onChange={props.inputPropsLeft.onChange}
            readOnly={isLeftReadOnly}
          />
          <FieldMiddleDecorator>
            <SmartQuote>{props.middleDecorator}</SmartQuote>
          </FieldMiddleDecorator>
          <Control2
            id={props.inputPropsRight.id}
            type={props.inputPropsRight.type}
            defaultValue={props.inputPropsRight.defaultValue}
            onFocus={props.inputPropsRight.onFocus}
            onBlur={props.inputPropsRight.onBlur}
            onChange={props.inputPropsRight.onChange}
            readOnly={isRightReadOnly}
          />
        </FieldDoubleControlGroup>
      </FieldContainer>
    )
  }
}

export const DoubleField = styled(NakedDoubleField)`
  display: grid;
  grid-template-areas:
    "label"
    "control-group";
  padding: 0.5em;
`
