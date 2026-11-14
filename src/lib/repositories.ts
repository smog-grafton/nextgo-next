import { products, services, solutions, type Product, type Service, type Solution } from '@/data/site';

type Repository<T> = {
  getAll(): Promise<T[]>;
  getBySlug(slug: string): Promise<T | null>;
};

export type ProductRepository = Repository<Product>;
export type ServiceRepository = Repository<Service>;
export type SolutionRepository = Repository<Solution>;

const resolve = <T extends { slug: string }>(items: T[]): Repository<T> => ({
  async getAll() { return items; },
  async getBySlug(slug) { return items.find((item) => item.slug === slug) ?? null; },
});

// These repositories mirror the public content model in the existing Laravel project.
// They are intentionally local while this standalone frontend is prepared for the API.
export const productRepository = resolve(products);
export const serviceRepository = resolve(services);
export const solutionRepository = resolve(solutions);
