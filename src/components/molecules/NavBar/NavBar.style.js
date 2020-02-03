import { css } from 'styled-components';

export default css`
  padding: 0 1.25rem;

  ul {
    padding: 0;
    list-style: none;
    margin: 0;
    display: flex;

    li {
      padding: 0;

      a {
        padding: 0 0.75rem;
        color: #fff;
        text-decoration: none;
        display: block;
      }
    }
  }
  padding: 0 1.25rem;

  .navbar {
    overflow: hidden;
    display: flex;
    flex-flow: row wrap;
  }

  .navbar a {
    font-size: 18px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none solid rgb(79, 91, 100);
    line-height: 25px;
  }

  .sub-nav {
    overflow: hidden;
  }

  .sub-nav .subnavbtn {
    font-size: 18px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: 'monaco';
    margin: 0;
  }

  .navbar a:hover,
  .sub-nav:hover .subnavbtn {
    border-top: 2px solid red;
  }

  .sub-nav-content {
    display: none;
    position: absolute;
    left: 0;
    background-color: red;
    width: 100%;
    z-index: 1;

    .sub-menu-list {
      display: flex;
      flex-direction: column;
      margin: 30px;
      height: 200px;
      flex-wrap: wrap;
    }
    .sub-menu-content {
      border: 1px solid;
      min-width: 25%;
      margin: 30px;
      text-align: left;
    }
    .sub-menu-content label {
      text-align: center;
    }
  }

  .sub-nav-content a {
    color: white;
    text-decoration: none;
  }

  .sub-nav-content a:hover {
    background-color: #eee;
    color: black;
  }

  .sub-nav:hover .sub-nav-content {
    display: flex;
    justify-content: space-around;
  }

  ${props =>
    props.vertical &&
    css`
      ul {
        display: block;

        li {
          a {
            padding: 0.5rem 0;
          }
        }
      }
    `};
`;
