import React from 'react';
import { Form, Grid, Label, Message } from 'semantic-ui-react';

function FormFieldWrapper({
  children,
  required = false,
  error = false,
  label = '',
  describedby = '',
  labelledby = '',
  columns = 0,
}) {
  return (
    <Form.Field
      inline
      error={error}
      required={required}
      className="eea field-wrapper"
    >
      <Grid>
        <Grid.Row verticalAlign="top">
          {error && (
            <Message
              negative
              content="This is an error message"
              size="mini"
              icon="exclamation circle"
              id={describedby}
            />
          )}
          {columns === 1 && (
            <Grid.Column computer="2" tablet="2" mobile="12">
              {label.length > 0 && (
                <Label id={labelledby}>
                  {label}
                  <span className="requred-input">*</span>
                </Label>
              )}
            </Grid.Column>
          )}
          <Grid.Column
            computer={columns === 1 ? '10' : '12'}
            tablet="10"
            mobile="12"
          >
            {children}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form.Field>
  );
}

export default FormFieldWrapper;
