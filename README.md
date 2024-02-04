# Elice Frontend Programming Assignment

엘리스 페이지의 과목 검색 기능 간소화된 버전을 구현
[배포링크](https://elice-frontend-pa.vercel.app/)

## 기술 스택

- React
- Typescript
- axios
- recoil
- react-router-dom
- styled-components
- prettier

## 폴더 구조

```
src
├── index.tsx
├── App.tsx
├── Router.tsx
├── api
│   ├── courses.ts
│   └── instance.ts
├── assets
│   ├── fonts
│   └── icons
├── components
│   ├── Common
│   │   ├── Card.tsx
│   │   ├── FilterTag.tsx
│   │   ├── Header.tsx
│   │   └── Input.tsx
│   └── Courses
│       ├── CoursesFilter.tsx
│       ├── CoursesList.tsx
│       ├── CoursesPagination.tsx
│       └── index.tsx
├── hooks
│   ├── useDebounce.ts
│   ├── useFetchCourses.ts
│   └── useFilter.ts
├── pages
│   └── Courses.tsx
├── styles 
│   ├── color.ts
│   ├── font.css
│   └── GlobalStyle.ts
└── utils
    ├── atom.ts
    ├── constant.ts
    └── type.ts

```

### 폴더 상세

- **api** : 프로젝트에 사용되는 axios instance 및 Api 함수를 정의합니다.
- **assets** : font, icon 등의 파일을 정의합니다.
- **components** : 재사용 가능한 컴포넌트로 구성되며, Common(공통)과 각 페이지 별 폴더로 나눠지고, 해당 프로젝트에서는 Courses 페이지 하나만 존재합니다.
- **hooks** : 커스텀 훅을 저장합니다.
- **pages** : 페이지에 해당하는 컴포넌트를 저장합니다.
- **styles** : GlobalStyle이나 font, color와 같은 style에 필요한 코드를 저장합니다.
- **utils** : 그 외의 recoil, default 값으로 사용되는 값 그리고 type을 정의합니다.

## 주요 구현 내용

### 검색 필터 및 URL query

https://github.com/leekyuho114/elice-frontend-pa/assets/64120854/c9f2a9a0-431f-4750-bd29-c22e9e5a2059

- URL query를 사용하기 위해 react-router-dom의 `useSearchParams` 훅을 사용하였습니다. `useFetchCourses` 커스텀 훅을 통해 searchParams와 api 호출 시 필요한 offset 값이 바뀔 때마다 get 요청을 하도록 구현하였습니다.
- 과도한 api 요청을 방지하기 위해 `useDebounce` 커스텀 훅을 정의하여 디바운싱하였습니다.
- `useFilter` 커스텀 훅을 정의하여, 초기 컴포넌트 마운트 시 URL query에서 값을 가져와 값을 초기화하고, `useDebounce`를 통한 input의 디바운싱 처리를 합니다.

### 검색 Course Item UI

<img width="923" alt="image" src="https://github.com/leekyuho114/elice-frontend-pa/assets/64120854/52c68dfe-b9b1-4a8e-b52f-1a6db6ea416c">
* axios를 통한 HTTP 통신으로 `is_free`, `discount_rate`, `price` 등을 통해 알맞는 UI를 구현하였습니다.

### Pagination

https://github.com/leekyuho114/elice-frontend-pa/assets/64120854/0b16f883-24d7-4d1a-9986-e2abd5aff1dd

- page state를 관리하기 위해 recoil 전역 변수 라이브러리를 사용하였습니다.
- `useFetchCourses`에서 페이지 마운트 시 page를 1로 초기화합니다.
- `CoursesPagination` 컴포넌트에서 모든 예외 케이스에 대해 실제 페이지와 동일하게 동작하도록 처리하였습니다.

## 결과 화면

![screencapture-elice-frontend-pa-vercel-app-2024-02-05-04_39_07](https://github.com/leekyuho114/elice-frontend-pa/assets/64120854/ef47fe76-8922-4e57-a436-c18e4e9b9a26)

## 추가 반영사항

- **반응형**: 브라우저 vw가 줄어듦에 따라 row에 보여지는 아이템의 개수를 `media-query`를 통해 반응형 처리하였습니다.
- **custom scroll**: 커스텀 스크롤 바를 구현하였습니다.
- **Header**: header의 UI만 구현하였습니다.
