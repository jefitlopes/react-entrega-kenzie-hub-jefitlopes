import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    height: 4.5625rem;
    padding: 0 0.625rem 0 0.8125rem;

    img {
      width: 6.5625rem;
      height: 0.9375rem;
    }
    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0rem 1.0152rem;
      gap: 0.6344rem;
      width: 3.4681rem;
      height: 2rem;
      background: var(--grey-3);
      border-style: none;
      border-radius: 0.25rem;
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 1.75rem;
      text-align: center;
      color: var(--grey-0);
      cursor: pointer;
    }
    button:hover {
      background: var(--grey-2);
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .user__container {
      display: flex;
      flex-direction: column;
      padding: 2rem 0.75rem 2rem 0.75rem;
      gap: 0.625rem;
      border-top: 0.0625rem solid var(--grey-3);
      border-bottom: 0.0625rem solid var(--grey-3);
      width: 100%;

      .container__inside {
        display: flex;
        flex-direction: column;

        h2 {
          font-weight: 700;
          font-size: 1.125rem;
          line-height: 1.75rem;
          color: var(--grey-0);
        }

        p {
          font-weight: 400;
          font-size: 0.75rem;
          line-height: 1.375rem;
          color: var(--grey-1);
        }
      }
    }
    .message__container {
      display: flex;
      flex-direction: column;
      padding: 2rem 0.75rem 0 0.75rem;
      gap: 0.625rem;

      h2 {
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.75rem;
        color: var(--grey-0);
      }
      p {
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1.5rem;
        color: #ffffff;
      }
    }
  }
  @media screen and (min-width: 768px) {
    header {
      width: 100%;
    }
    main {
      .user__container {
        .container__inside {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          margin: 0 auto;
        }
      }
      .message__container {
        width: 100%;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    header {
      display: flex;
      justify-content: space-between;
      width: 48.75rem;
      padding: 0;
    }
    hr {
      width: 100vw;
    }
    main {
      .user__container {
        .container__inside {
          width: 48.75rem;
        }
      }
      .message__container {
        width: 48.75rem;
        padding-left: 0;
      }
    }
  }
`;
