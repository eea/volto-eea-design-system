import React from 'react';
import { Form, Grid, Label, Message } from 'semantic-ui-react';

function FormFieldWrapper({
  children,
  required = false,
  error = false,
  label = '',
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
          {columns === 1 && (
            <Grid.Column computer="1" tablet="2" mobile="12">
              {label.length > 0 && <Label>{label}</Label>}
            </Grid.Column>
          )}
          <Grid.Column
            computer={columns === 1 ? '11' : '12'}
            tablet="10"
            mobile="12"
          >
            {children}
            {error && (
              <Message
                negative
                content="This is a mandatory field"
                size="mini"
                icon="exclamation circle"
              />
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form.Field>
  );
}

export default FormFieldWrapper;
