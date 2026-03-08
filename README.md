# Backend Interview Study

순수하게 나를 위한 백엔드 면접 준비를 위한 주제별 Q&A 모음 웹사이트

## 🔗 Live

**https://byesol.github.io/interview-study/**

## 📂 Topics

### Database
| 주제 | 파일 |
|------|------|
| 인덱스 완전 정복 | `pages/db-index.html` |
| B+Tree & 인덱스 구조 | `pages/db-btree.html` |
| Key란 무엇인가? | `pages/db-key.html` |
| Full-Text Index & ngram | `pages/db-fulltext-ngram.html` |
| 트랜잭션 완전 정복 | `pages/db-transaction.html` |
| JOIN & 정규화 & 쿼리 최적화 | `pages/db-join-normalization.html` |
| Replication & Sharding | `pages/db-replication-sharding.html` |

### Operating System
| 주제 | 파일 |
|------|------|
| 프로세스 & 스레드 | `pages/os-process-thread.html` |
| TLB & 컨텍스트 스위칭 | `pages/os-tlb-context-switching.html` |
| Deadlock (교착상태) | `pages/os-deadlock.html` |

### Backend & Spring
| 주제 | 파일 |
|------|------|
| Java 핵심 면접 포인트 | `pages/java-core.html` |
| Java 동시성 & 멀티스레드 | `pages/java-concurrency.html` |
| JVM, GC, HTTPS, Redis, Docker, TCP/UDP | `pages/backend-jvm-gc.html` |
| Spring 핵심 원리 | `pages/spring-core.html` |
| Spring MVC | `pages/backend-spring-mvc.html` |
| N+1 & Lazy Loading | `pages/backend-n1-lazy.html` |
| 인증 방식 & JWT | `pages/backend-auth-jwt.html` |

### Infra & Network
| 주제 | 파일 |
|------|------|
| VPC, NAT, Nginx, RAG, Keep-Alive | `pages/infra-vpc-nat-nginx.html` |

### System Design
| 주제 | 파일 |
|------|------|
| 좌석 예약 시스템 설계 | `pages/design-seat-reservation.html` |

## 🏗 Structure

```
interview-study/
├── index.html            # 메인 페이지
├── css/style.css         # 통일 다크 테마
├── js/main.js            # 아코디언, 탭, 검색
└── pages/                # 주제별 Q&A 페이지 (19개)
```

## 🚀 Deployment

GitHub Pages로 자동 배포 (master 브랜치 → `/` 경로)

### 로컬 실행
`index.html`을 브라우저에서 열면 됩니다.

## 📝 새 토픽 추가 방법

1. `pages/` 에 새 HTML 파일 생성 (기존 파일 참고)
2. `css/style.css` 와 `js/main.js` 링크
3. `index.html`에 카드 추가
4. push하면 자동 배포
