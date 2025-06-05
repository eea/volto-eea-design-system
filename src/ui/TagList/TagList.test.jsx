import React from 'react';
import { render, screen } from '@testing-library/react';
import TagList from './TagList';
import '@testing-library/jest-dom/extend-expect';

describe('TagList', () => {
  it('should render TagList with children', () => {
    render(
      <TagList>
        <span>Test content</span>
      </TagList>,
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('should apply default tags className', () => {
    const { container } = render(
      <TagList>
        <span>Test content</span>
      </TagList>,
    );
    expect(container.firstChild).toHaveClass('tags');
  });

  it('should merge custom className with default tags className', () => {
    const { container } = render(
      <TagList className="custom-class">
        <span>Test content</span>
      </TagList>,
    );
    expect(container.firstChild).toHaveClass('tags', 'custom-class');
  });

  it('should handle empty className prop', () => {
    const { container } = render(
      <TagList className="">
        <span>Test content</span>
      </TagList>,
    );
    expect(container.firstChild).toHaveClass('tags');
  });

  it('should handle undefined className prop', () => {
    const { container } = render(
      <TagList className={undefined}>
        <span>Test content</span>
      </TagList>,
    );
    expect(container.firstChild).toHaveClass('tags');
  });

  it('should pass through other props', () => {
    const { container } = render(
      <TagList data-testid="tag-list" role="list">
        <span>Test content</span>
      </TagList>,
    );
    expect(container.firstChild).toHaveAttribute('data-testid', 'tag-list');
    expect(container.firstChild).toHaveAttribute('role', 'list');
  });

  describe('TagList.Title', () => {
    it('should render TagList.Title with children', () => {
      render(<TagList.Title>Test Title</TagList.Title>);
      expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('should apply tags-title className', () => {
      render(<TagList.Title>Test Title</TagList.Title>);
      expect(screen.getByText('Test Title')).toHaveClass('tags-title');
    });

    it('should pass through props to TagList.Title', () => {
      render(
        <TagList.Title data-testid="title" role="heading">
          Test Title
        </TagList.Title>,
      );
      const title = screen.getByText('Test Title');
      expect(title).toHaveAttribute('data-testid', 'title');
      expect(title).toHaveAttribute('role', 'heading');
    });

    it('should render as span element', () => {
      render(<TagList.Title>Test Title</TagList.Title>);
      expect(screen.getByText('Test Title').tagName).toBe('SPAN');
    });
  });

  describe('TagList.Content', () => {
    it('should render TagList.Content with children', () => {
      render(<TagList.Content>Test Content</TagList.Content>);
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('should apply tags-content className', () => {
      render(<TagList.Content>Test Content</TagList.Content>);
      expect(screen.getByText('Test Content')).toHaveClass('tags-content');
    });

    it('should render as div element', () => {
      render(<TagList.Content>Test Content</TagList.Content>);
      expect(screen.getByText('Test Content').tagName).toBe('DIV');
    });
  });

  describe('Complete TagList with Title and Content', () => {
    it('should render complete TagList structure', () => {
      render(
        <TagList>
          <TagList.Title>Categories</TagList.Title>
          <TagList.Content>
            <span>Tag 1</span>
            <span>Tag 2</span>
          </TagList.Content>
        </TagList>,
      );

      expect(screen.getByText('Categories')).toBeInTheDocument();
      expect(screen.getByText('Tag 1')).toBeInTheDocument();
      expect(screen.getByText('Tag 2')).toBeInTheDocument();
    });

    it('should maintain proper HTML structure', () => {
      const { container } = render(
        <TagList className="tag-container">
          <TagList.Title>Categories</TagList.Title>
          <TagList.Content>
            <span>Tag 1</span>
          </TagList.Content>
        </TagList>,
      );

      const tagList = container.firstChild;
      expect(tagList).toHaveClass('tags', 'tag-container');

      const title = tagList.querySelector('.tags-title');
      expect(title).toBeInTheDocument();
      expect(title.tagName).toBe('SPAN');

      const content = tagList.querySelector('.tags-content');
      expect(content).toBeInTheDocument();
      expect(content.tagName).toBe('DIV');
    });
  });
});
