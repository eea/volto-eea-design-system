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
      className="eea fieldWrapper"
    >
      <Grid>
        <Grid.Row verticalAlign="top">
          {columns === 2 && (
            <Grid.Column computer={2} tablet={3} mobile={12}>
              {label.length > 0 && <Label>{label}</Label>}
            </Grid.Column>
          )}
          <Grid.Column
            computer={columns === 2 ? 8 : 12}
            tablet={7}
            mobile={12}
            className={`eea fieldWrapper item`}
          >
            {children}
          </Grid.Column>
        </Grid.Row>
        {error && (
          <Grid.Row verticalAlign="middle">
            <Grid.Column computer={columns === 2 ? 2 : 0}></Grid.Column>
            <Grid.Column computer={columns === 2 ? 8 : 12}>
              <Message
                negative
                content="This is a mandatory field"
                size="mini"
                icon="exclamation circle"
              />
            </Grid.Column>
          </Grid.Row>
        )}
      </Grid>
    </Form.Field>
  );
}

export default FormFieldWrapper;
