import Project from './components/Project';
jest.mock('./components/Project');

describe('Project class', () => {
  beforeEach(() => {
    Project.mockClear();
    const project = new Project()
  })

  it('Check if Project was called', () => {
    expect(Project).toHaveBeenCalledTimes(1);
  })

  it('Should return a li with the name of the project', () => {
    const pj = new Project()
    expect(typeof pj.showName).toBe('string')
  })

})